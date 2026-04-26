"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { Loader2, LockKeyhole, Plus, X } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const playerSchema = z.object({
  name: z.string().min(2, "Player name is required"),
  email: z.string().email("Invalid email"),
  role: z.enum(["player", "gk"]),
});

const formSchema = z.object({
  coachEmail: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  coachName: z.string().min(2, {
    message: "Coach Name must be at least 2 characters.",
  }),

  teamName: z.string().min(2, {
    message: "Team Name must be at least 2 characters.",
  }),
  league: z.string().min(1, {
    message: "League is required.",
  }),
  category: z.string().min(1, {
    message: "Category is required.",
  }),
  players: z.array(playerSchema).min(1, "At least 1 player is required"),
});
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

interface RegisterAsTeamPlayerFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subscriptionId?: string;
  subscriptionTitle?: string;
  subscriptionPrice?: number;
  subscriptionPaymentType?: string;
}

const RegisterAsTeamPlayerForm = ({
  open,
  onOpenChange,
  subscriptionId,
  subscriptionTitle,
  subscriptionPrice = 0,
  subscriptionPaymentType,
}: RegisterAsTeamPlayerFormProps) => {
  const session = useSession();
  const token = (session?.data?.user as { accessToken: string })?.accessToken;
  const [couponCode, setCouponCode] = useState("");
  const [appliedCouponCode, setAppliedCouponCode] = useState<string | null>(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [showCouponSection, setShowCouponSection] = useState(false);
  const [priceSummary, setPriceSummary] = useState<{
    originalPrice: number;
    discountedPrice: number;
    savedAmount: number;
  } | null>(null);

  console.log("Subscription ID:", subscriptionId);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coachName: "",
      coachEmail: "",
      teamName: "",
      league: "",
      category: "",
      players: [{ name: "", email: "", role: "player" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "players",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["team-payment"],
    mutationFn: async ({
      values,
      couponCode,
    }: {
      values: z.infer<typeof formSchema>;
      couponCode?: string;
    }) => {
      /* 1️⃣ PROFILE UPDATE */
      const teamRes = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        },
      );

      const teamData = await teamRes.json();
      if (!teamData?.success) {
        throw new Error(teamData?.message || "Team creation failed");
      }

      const teamId = teamData?.data?._id;

      /* 2️⃣ STRIPE PAYMENT */
      const paymentRes = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/subscription/team/${teamId}/pay/${subscriptionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(couponCode ? { couponCode } : {}),
        },
      );

      const paymentData = await paymentRes.json();
      // if (!paymentData?.success) {
      //   throw new Error("Payment creation failed")
      // }

      return paymentData;
    },

    onSuccess: (data) => {
      // console.log("Payment Initiation Success:", data)
      if (!data?.success) {
        toast.message(data?.message || "Payment initiation failed");
        return;
      }

      if (!data?.data?.approvalUrl) {
        toast.success(data?.message || "Payment processed successfully");
        onOpenChange(false);
        return;
      }

      toast.success("Redirecting to payment...");
      window.location.href = data.data.approvalUrl;
    },

    onError: (error: Error) => {
      toast.error(error.message || "Something went wrong");
    },
  });

  const applyCoupon = async () => {
    const trimmedCode = couponCode.trim().toUpperCase();

    if (!trimmedCode) {
      toast.error("Please enter a coupon code");
      return;
    }

    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      setIsApplyingCoupon(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/copon/apply-copon`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            code: trimmedCode,
            originalPrice: subscriptionPrice,
            paymentType: subscriptionPaymentType,
          }),
        },
      );

      const data = await res.json();
      if (!data?.success) {
        throw new Error(data?.message || "Failed to apply coupon");
      }

      setAppliedCouponCode(trimmedCode);
      setPriceSummary(data?.data ?? null);
      setShowCouponSection(true);
      toast.success("Coupon applied successfully");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to apply coupon";
      setAppliedCouponCode(null);
      setPriceSummary(null);
      toast.error(errorMessage);
    } finally {
      setIsApplyingCoupon(false);
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const fallbackCouponCode = couponCode.trim().toUpperCase();
    const resolvedCouponCode = appliedCouponCode ?? fallbackCouponCode;

    mutate({
      values,
      couponCode: resolvedCouponCode || undefined,
    });
  }

  const originalPrice = priceSummary?.originalPrice ?? subscriptionPrice;
  const totalPrice = priceSummary?.discountedPrice ?? subscriptionPrice;
  const savedAmount = priceSummary?.savedAmount ?? 0;
  const hasDiscount = !!priceSummary && savedAmount > 0;
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl bg-white !rounded-[12px]">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/assets/images/logo.jpg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[289px] h-[80px] object-cover"
            />
          </Link>
          <h4 className="text-2xl md:text-3xl lg:text-4xl text-[#131313] leading-[120%] font-normal text-center pb-2">
            Register As Team
          </h4>
          <div className="h-[250px] md:h-[280px] lg:h-[320px] overflow-auto bg-white border-[2px] border-[#E7E7E7] shadow-[0px_0px_32px_0px_#0000001F] p-6 rounded-[16px]">
            {/* <h4 className="text-xl md:text-2xl lg:text-3xl text-[#131313] leading-[120%] font-normal text-center pb-6">Personal Information</h4> */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="coachName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                        Coach Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[42px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] "
                          placeholder="Enter Coach Name..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="coachEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="h-[42px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] "
                          placeholder="Enter Coach Email..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                        Team Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[42px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] "
                          placeholder="Enter Player Name..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                        Category *
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full h-[42px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent className="h-[200px] overflow-y-auto">
                            <SelectItem value="semi-professional">
                              Semi Professional
                            </SelectItem>
                            <SelectItem value="professional">
                              Professional
                            </SelectItem>
                            <SelectItem value="adult">Adult</SelectItem>
                            <SelectItem value="U9">U9</SelectItem>
                            <SelectItem value="U10">U10</SelectItem>
                            <SelectItem value="U11">U11</SelectItem>
                            <SelectItem value="U12">U12</SelectItem>
                            <SelectItem value="U13">U13</SelectItem>
                            <SelectItem value="U14">U14</SelectItem>
                            <SelectItem value="U15">U15</SelectItem>
                            <SelectItem value="U16">U16</SelectItem>
                            <SelectItem value="U17">U17</SelectItem>
                            <SelectItem value="U18">U18</SelectItem>
                            <SelectItem value="U19">U19</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="league"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                        Which league do you play?
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full h-[42px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                            <SelectValue placeholder="Select League" />
                          </SelectTrigger>
                          <SelectContent className="h-[200px] overflow-y-auto">
                            <SelectItem value="nwsl">NWSL</SelectItem>
                            <SelectItem value="ecnl">ECNL</SelectItem>
                            <SelectItem value="usl super league">USL Super League</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="ecnl rl">ECNL RL</SelectItem>
                            <SelectItem value="mls next">MLS NEXT</SelectItem>
                            <SelectItem value="npl">NPL</SelectItem>
                            <SelectItem value="pdl">PDL</SelectItem>
                            <SelectItem value="upsl">UPSL</SelectItem>
                            <SelectItem value="usl academy">USL Academy</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="league"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#424242] leading-[150%] font-normal">
                        League *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[42px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] "
                          placeholder="Enter your league..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                {/* PLAYERS */}
                <div className="bg-[#E9F6E9] p-4 rounded-xl space-y-4">
                  <p className="font-medium">Player names (15 names) *</p>

                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="bg-[#F5FFF5] p-4 rounded-lg relative space-y-3"
                    >
                      <p className="text-sm font-medium">Player {index + 1}</p>

                      <FormField
                        control={form.control}
                        name={`players.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="h-[44px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] "
                                placeholder="Player name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`players.${index}.email`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="h-[44px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] "
                                type="email"
                                placeholder="Player email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`players.${index}.role`}
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-[44px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292] ">
                                  <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="player">Player</SelectItem>
                                <SelectItem value="gk">Goalkeeper</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      {fields.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="bg-red-500 absolute top-2 right-2 text-white p-1 rounded-[10px]"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}

                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        append({ name: "", email: "", role: "player" })
                      }
                      className="flex items-center gap-2 text-green-700 text-base font-semibold"
                    >
                      <Plus /> Add Player
                    </button>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full mt-5 h-[44px] rounded-[8px] border-[#6C6C6C] text-base"
                  onClick={() => setShowCouponSection((prev) => !prev)}
                >
                  {showCouponSection ? "Hide coupon section" : "Have a coupon code?"}
                </Button>

                {showCouponSection && (
                <div
                  className="bg-white border-[2px] border-[#E7E7E7] p-3 rounded-[16px] mt-5"
                  aria-label={subscriptionTitle || "Coupon section"}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-base text-[#424242]">Original price</p>
                      <p
                        className={`text-lg font-semibold text-[#131313] ${hasDiscount ? "line-through text-[#7A7A7A]" : ""}`}
                      >
                        ${originalPrice}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-base text-[#424242]">Total</p>
                      <p className="text-2xl font-semibold text-primary">${totalPrice}</p>
                    </div>
                    {hasDiscount && (
                      <p className="text-sm text-primary">
                        You saved ${savedAmount.toFixed(2)} with coupon {appliedCouponCode}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 space-y-2">
                    <p className="text-base text-[#424242] font-medium">Coupon code</p>
                    <div className="flex items-center gap-2">
                      <Input
                        value={couponCode}
                        onChange={(event) => {
                          const nextValue = event.target.value;
                          setCouponCode(nextValue);
                          if (
                            appliedCouponCode &&
                            nextValue.trim().toUpperCase() !== appliedCouponCode
                          ) {
                            setAppliedCouponCode(null);
                            setPriceSummary(null);
                          }
                        }}
                        placeholder="Enter coupon code"
                        className="h-[44px] text-base leading-[120%] text-[#131313] font-normal border border-[#6C6C6C] rounded-[8px] placeholder:text-[#929292]"
                      />
                      <Button
                        type="button"
                        onClick={applyCoupon}
                        disabled={isApplyingCoupon || !couponCode.trim()}
                        className="h-[44px] min-w-[100px] rounded-[8px] border-[#6C6C6C]"
                      >
                        {isApplyingCoupon ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Applying
                          </>
                        ) : (
                          "Apply"
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
                )}

                <Button
                  disabled={isPending}
                  className="w-full h-[47px] rounded-[8px] text-[#F2F2F2] text-base "
                  type="submit"
                >
                  <LockKeyhole />{" "}
                  {isPending ? "Processing..." : "Continue to Payment"}
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterAsTeamPlayerForm;
