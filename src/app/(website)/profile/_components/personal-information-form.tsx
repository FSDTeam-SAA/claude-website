"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useSession } from "next-auth/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { format } from "date-fns"
import { CalendarIcon, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { User } from "./user-data-type"


const socialMediaNameEnum = z.enum([
    "Facebook",
    "Instagram",
    "Twitter",
    "YouTube",
    "TikTok",
]);

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    schoolName: z.string().optional(),
    phoneCode: z.string().min(1),
    phone: z.string().min(6),
    // phone: z.string().min(7, { message: "Phone number is too short." }),
    // phone: z
    //     .string()
    //     .min(7, { message: "Phone number is too short." })
    //     .max(20, { message: "Phone number is too long." })
    //     .regex(/^\+?[0-9]{7,15}$/, {
    //         message: "Enter a valid international phone number (e.g. +1 456765432)",
    //     }),
    jerseyNumber: z.string().min(1, {
        message: "Jersey Number must be at least 1 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    hight: z.string().min(2, {
        message: "Hight must be at least 2 characters.",
    }),
    weight: z.string().min(2, {
        message: "Weight must be at least 2 characters.",
    }),
    agent: z.string().optional(),
    socialMedia: z.array(
        z.object({
            name: socialMediaNameEnum.optional(),
            url: z.string().url().optional(),
        })
    ).optional(),

    citizenship: z.string().min(2, {
        message: "citizenship must be at least 2 characters.",
    }),
    nationality: z.string().min(2, {
        message: "nationality must be at least 2 characters.",
    }),
    currentClub: z.string().min(2, {
        message: "Current Club must be at least 2 characters.",
    }),
    dob: z.date().nullable(),
    birthdayPlace: z.string().min(2, {
        message: "Place Of Birth must be at least 2 characters.",
    }),
    gender: z.string().min(1, {
        message: "Gender is required.",
    }),
    league: z.string().min(1, {
        message: "League is required.",
    }),
    category: z.string().min(1, {
        message: "Category is required.",
    }),
    foot: z.string().min(1, {
        message: "Foot is required.",
    }),

    position: z.array(z.string()).min(1, "Select at least one position").max(2, "Maximum 2 positions"),
    inSchoolOrCollege: z.enum(["yes", "no"], { message: "Please select if you are in school/college." }),
    institute: z.string().optional(),
    gpa: z.string().optional(),
}).refine((data) => {
    if (data.inSchoolOrCollege === "yes") {
        if (!data.institute || data.institute.trim().length < 2) return false;

        // GPA required for High School OR College / University
        if (
            data.institute === "high school" ||
            data.institute === "college / university"
        ) {
            if (!data.gpa || data.gpa.trim().length === 0) return false;
        }
    }
    return true;
}, {
    message: "GPA required for High School and College / University",
    path: ["gpa"],
})




interface PersonalInformationFormProps {
    user?: User
}

// const PersonalInformationForm = () => {
const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({ user }) => {
    const session = useSession();
    const token = (session?.data?.user as { accessToken: string })?.accessToken;
    const queryClient = useQueryClient();

    const POSITIONS = [
        { label: "GK", value: "gk" },
        { label: "RB", value: "rb" },
        { label: "LB", value: "lb" },
        { label: "CB", value: "cb" },
        { label: "Defensive Midfielder", value: "defensive midfielder" },
        { label: "Offensive Midfielder", value: "offensive midfielder" },
        { label: "Right Winger", value: "right winger" },
        { label: "Left Winger", value: "left winger" },
        { label: "Striker", value: "striker" },
    ]

    const SOCIAL_MEDIA_OPTIONS = [
        "Facebook",
        "Instagram",
        "Twitter",
        "YouTube",
        "TikTok",
    ] as const




    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            jerseyNumber: user?.jerseyNumber || "",
            email: user?.email || "",
            // phone: user?.phone || "",
            // phone: `${defaultCountryCode} ${defaultNumber}`.trim(),
            phoneCode: user?.phoneCode || "+880",
            phone: user?.phone || "",
            gender: user?.gender || "",
            hight: user?.hight || "",
            weight: user?.weight || "",
            agent: user?.agent || "",
            schoolName: user?.schoolName || "",
            socialMedia: user?.socialMedia
                ? user.socialMedia.map((item) => ({
                    name: item.name as
                        | "Facebook"
                        | "Instagram"
                        | "Twitter"
                        | "YouTube"
                        | "TikTok",
                    url: item.url,
                }))
                : [],
            citizenship: user?.citizenship || "",
            nationality: user?.nationality || "",
            currentClub: user?.currentClub || "",
            league: user?.league || "",
            category: user?.category || "",
            foot: user?.foot || "",
            position: user?.position || [],
            birthdayPlace: user?.birthdayPlace || "",
            dob: user?.dob ? new Date(user.dob) : null,
            inSchoolOrCollege: user?.inSchoolOrCollege === true ? "yes" : user?.inSchoolOrCollege === false ? "no" : undefined,
            institute: user?.institute || "",
            gpa: user?.gpa || "",
        }
    })




    const inSchoolOrCollege = form.watch("inSchoolOrCollege")

    const { mutate, isPending } = useMutation({
        mutationKey: ["update-profile"],
        mutationFn: async (values: z.infer<typeof formSchema>) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(values)
            })
            return res.json()
        },
        onSuccess: async (data) => {
            if (!data?.success) {
                toast.error(data?.message || "Something went wrong")
                return
            }
            toast.success(data?.message || "Profile updated successfully")
            await queryClient.invalidateQueries({ queryKey: ["user-profile"] })
        },
        onError: () => toast.error("Update failed"),
    })



    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)

        mutate(values)
    }



    return (
        <div>
            <div className="pt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">First Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="Bessie" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Last Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="Jackson" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Gender (boy - girl)
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select Gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="nationality"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Nationality</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="jerseyNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Jersey Number</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="Jackson" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />





                            {/* Phone Number */}
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <div className="flex gap-2">
                                            <FormField
                                                control={form.control}
                                                name="phoneCode"
                                                render={({ field: codeField }) => (
                                                    <FormControl>
                                                        <Select value={codeField.value} onValueChange={codeField.onChange}>
                                                            <SelectTrigger className="w-[110px] h-[47px] border border-[#645949] rounded-[8px]">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent className="h-[250px]  md:h-[300px] overflow-auto">
                                                                {/* North America */}
                                                                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                                                {/* <SelectItem value="+1">🇨🇦 +1</SelectItem> */}

                                                                {/* <SelectItem value="+1">🇺🇸/🇨🇦 +1</SelectItem> */}


                                                                {/* Europe */}
                                                                <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                                                <SelectItem value="+33">🇫🇷 +33</SelectItem>
                                                                <SelectItem value="+49">🇩🇪 +49</SelectItem>
                                                                <SelectItem value="+39">🇮🇹 +39</SelectItem>
                                                                <SelectItem value="+34">🇪🇸 +34</SelectItem>
                                                                <SelectItem value="+31">🇳🇱 +31</SelectItem>
                                                                <SelectItem value="+46">🇸🇪 +46</SelectItem>
                                                                <SelectItem value="+41">🇨🇭 +41</SelectItem>
                                                                <SelectItem value="+48">🇵🇱 +48</SelectItem>
                                                                <SelectItem value="+351">🇵🇹 +351</SelectItem>

                                                                {/* Asia */}
                                                                <SelectItem value="+880">🇧🇩 +880</SelectItem>
                                                                <SelectItem value="+91">🇮🇳 +91</SelectItem>
                                                                <SelectItem value="+92">🇵🇰 +92</SelectItem>
                                                                <SelectItem value="+94">🇱🇰 +94</SelectItem>
                                                                <SelectItem value="+86">🇨🇳 +86</SelectItem>
                                                                <SelectItem value="+81">🇯🇵 +81</SelectItem>
                                                                <SelectItem value="+82">🇰🇷 +82</SelectItem>
                                                                <SelectItem value="+62">🇮🇩 +62</SelectItem>
                                                                <SelectItem value="+60">🇲🇾 +60</SelectItem>
                                                                <SelectItem value="+66">🇹🇭 +66</SelectItem>
                                                                <SelectItem value="+63">🇵🇭 +63</SelectItem>

                                                                {/* Middle East */}
                                                                <SelectItem value="+971">🇦🇪 +971</SelectItem>
                                                                <SelectItem value="+966">🇸🇦 +966</SelectItem>
                                                                <SelectItem value="+974">🇶🇦 +974</SelectItem>
                                                                <SelectItem value="+965">🇰🇼 +965</SelectItem>
                                                                <SelectItem value="+968">🇴🇲 +968</SelectItem>
                                                                <SelectItem value="+972">🇮🇱 +972</SelectItem>

                                                                {/* Africa */}
                                                                <SelectItem value="+20">🇪🇬 +20</SelectItem>
                                                                <SelectItem value="+234">🇳🇬 +234</SelectItem>
                                                                <SelectItem value="+254">🇰🇪 +254</SelectItem>
                                                                <SelectItem value="+27">🇿🇦 +27</SelectItem>
                                                                <SelectItem value="+212">🇲🇦 +212</SelectItem>

                                                                {/* Oceania */}
                                                                <SelectItem value="+61">🇦🇺 +61</SelectItem>
                                                                <SelectItem value="+64">🇳🇿 +64</SelectItem>

                                                                {/* South America */}
                                                                <SelectItem value="+55">🇧🇷 +55</SelectItem>
                                                                <SelectItem value="+54">🇦🇷 +54</SelectItem>
                                                                <SelectItem value="+57">🇨🇴 +57</SelectItem>
                                                                <SelectItem value="+56">🇨🇱 +56</SelectItem>
                                                                <SelectItem value="+51">🇵🇪 +51</SelectItem>

                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                )}
                                            />
                                            <FormControl className="flex-1">
                                                <Input {...field} placeholder="1712345678" className="flex-1 h-[47px] border border-[#645949] rounded-[8px]" />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />





                        </div>

                        <div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Email Address</FormLabel>
                                        <FormControl>
                                            <Input disabled className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="alma.lawson@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>






                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="hight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Hight</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="00" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="weight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Weight</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="00" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            {/* <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Date Of Birth
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        className={`w-full justify-start text-left h-12 ${!field.value && "text-muted-foreground"
                                                            }`}
                                                    >
                                                        {field.value instanceof Date && !isNaN(field.value.getTime())
                                                            ? format(field.value, "MMM dd, yyyy")
                                                            : "mm/dd/yyyy"}

                                                        <CalendarIcon className="ml-auto h-4 w-4" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value ?? undefined}
                                                    onSelect={(date) => field.onChange(date ?? null)}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Date of Birth
                                        </FormLabel>

                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        className={`w-full justify-start text-left h-[47px] border border-[#645949] ${!field.value && "text-muted-foreground"
                                                            }`}
                                                    >
                                                        {field.value
                                                            ? format(field.value, "dd MMM yyyy")
                                                            : "Select date"}

                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-70" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>

                                            <PopoverContent className="w-auto p-2" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value ?? undefined}
                                                    onSelect={(date) => field.onChange(date ?? null)}
                                                    captionLayout="dropdown"
                                                    fromYear={1970}
                                                    toYear={new Date().getFullYear()}
                                                    className="rounded-lg border"
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />




                            <FormField
                                control={form.control}
                                name="birthdayPlace"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Place of birth</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="citizenship"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Citizenship</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="currentClub"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Current Club</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                            <FormField
                                control={form.control}
                                name="league"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            League (Select One)
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select" />
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
                                                    <SelectItem value="upsl division 1">UPSL Division 1</SelectItem>
                                                    <SelectItem value="upsl premier">UPSL Premier</SelectItem>
                                                    <SelectItem value="usl academy">USL Academy</SelectItem>
                                                </SelectContent>
                                            </Select>
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
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Category
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent className="h-[200px] overflow-y-auto">
                                                    <SelectItem value="semi-professional">Semi Professional</SelectItem>
                                                    <SelectItem value="professional">Professional</SelectItem>
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                            <FormField
                                control={form.control}
                                name="foot"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Foot (select: left - right - both)
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="w-full h-[48px] py-2 px-3 rounded-[8px] border border-[#645949] text-base font-medium leading-[120%] text-[#131313]">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="left">Left</SelectItem>
                                                    <SelectItem value="right">Right</SelectItem>
                                                    <SelectItem value="both">Both</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                            Position (select up to 2)
                                        </FormLabel>

                                        <Popover >
                                            <PopoverTrigger asChild>
                                                <FormControl >
                                                    <Button
                                                        variant="outline"
                                                        className="w-full justify-between h-[48px] border border-[#645949]"
                                                    >
                                                        {field.value?.length
                                                            ? field.value
                                                                .map(
                                                                    (v) =>
                                                                        POSITIONS.find((p) => p.value === v)?.label
                                                                )
                                                                .join(", ")
                                                            : "Select position"}

                                                        <span className="ml-2">▾</span>
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>

                                            <PopoverContent className="min-w-[320px] p-3">
                                                <div className="space-y-2">
                                                    {POSITIONS.map((pos) => {
                                                        const checked = field.value?.includes(pos.value)
                                                        const disabled =
                                                            !checked && field.value?.length >= 2

                                                        return (
                                                            <label
                                                                key={pos.value}
                                                                className={`flex items-center gap-3 text-sm cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""
                                                                    }`}
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={checked}
                                                                    disabled={disabled}
                                                                    onChange={(e) => {
                                                                        if (e.target.checked) {
                                                                            field.onChange([...field.value, pos.value])
                                                                        } else {
                                                                            field.onChange(
                                                                                field.value.filter((v) => v !== pos.value)
                                                                            )
                                                                        }
                                                                    }}
                                                                    className="h-4 w-4 accent-black"
                                                                />
                                                                {pos.label}
                                                            </label>
                                                        )
                                                    })}
                                                </div>
                                            </PopoverContent>
                                        </Popover>

                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />


                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="agent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">Agent/Agency Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="Bessie" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="socialMedia"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal text-[#131313]">
                                            Social Media
                                        </FormLabel>

                                        <div className="space-y-4">
                                            {field.value?.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 items-center"
                                                >
                                                    {/* Social Media Name */}
                                                    <Select
                                                        value={item.name}
                                                        onValueChange={(value) => {
                                                            const updated = [...(field.value ?? [])]
                                                            updated[index] = {
                                                                ...updated[index],
                                                                name: value as typeof item.name,
                                                            }
                                                            field.onChange(updated)
                                                        }}
                                                    >
                                                        <SelectTrigger className="h-[47px] border border-[#645949] rounded-[8px]">
                                                            <SelectValue placeholder="Select platform" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {SOCIAL_MEDIA_OPTIONS.map((option) => (
                                                                <SelectItem key={option} value={option}>
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>

                                                    {/* URL */}
                                                    <Input
                                                        placeholder="https://"
                                                        value={item.url}
                                                        onChange={(e) => {
                                                            const updated = [...(field.value ?? [])]
                                                            updated[index] = {
                                                                ...updated[index],
                                                                url: e.target.value,
                                                            }
                                                            field.onChange(updated)
                                                        }}
                                                        className="h-[47px] border border-[#645949] rounded-[8px]"
                                                    />

                                                    {/* DELETE BUTTON */}
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        className="p-2 bg-red-500 text-white border-red-400 rounded-[10px] hover:bg-red-50"
                                                        onClick={() => {
                                                            const updated = field.value?.filter((_, i) => i !== index)
                                                            field.onChange(updated)
                                                        }}
                                                    >
                                                        <X />
                                                    </Button>
                                                </div>
                                            ))}

                                            {/* ADD NEW SOCIAL MEDIA */}
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="mt-2 border-2 border-primary rounded-[10px]"
                                                onClick={() =>
                                                    field.onChange([
                                                        ...(field.value ?? []),
                                                        { name: "Facebook", url: "" },
                                                    ])
                                                }
                                            >
                                                + Add Social Media
                                            </Button>
                                        </div>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>


                        <FormField
                            control={form.control}
                            name="inSchoolOrCollege"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                        Are you in Middle School or High School or College/University?
                                    </FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-row items-center space-x-8"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="yes" id="yes" />
                                                <label htmlFor="yes" className="cursor-pointer text-base font-medium text-[#131313]">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <RadioGroupItem value="no" id="no" />
                                                <label htmlFor="no" className="cursor-pointer text-base font-medium text-[#131313]">
                                                    No
                                                </label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                        {/* Conditional Education Fields */}
                        {inSchoolOrCollege === "yes" && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                                <div className="md:col-span-2">
                                    <FormField
                                        control={form.control}
                                        name="institute"
                                        render={({ field }) => (
                                            <FormItem>
                                                {/* <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                                    School Name
                                                </FormLabel> */}
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        value={field.value}
                                                        className="flex flex-row items-center space-x-8 pt-2"
                                                    >
                                                        <div className="flex items-center space-x-3">
                                                            <RadioGroupItem value="middle school" id="middle school" />
                                                            <label htmlFor="middle school" className="cursor-pointer text-base font-medium text-[#131313]">
                                                                Middle School
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center space-x-3">
                                                            <RadioGroupItem value="high school" id="high school" />
                                                            <label htmlFor="high school" className="cursor-pointer text-base font-medium text-[#131313]">
                                                                High School
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center space-x-3">
                                                            <RadioGroupItem value="college / university" id="college / university" />
                                                            <label htmlFor="college / university" className="cursor-pointer text-base font-medium text-[#131313]">
                                                                College/University
                                                            </label>
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage className="text-red-500" />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                {/* GPA field: show only if College / University is selected */}
                                {/* GPA field: show if High School OR College / University */}
                                {["high school", "college / university"].includes(form.watch("institute") ?? "") && (
                                    <div className="md:col-span-1 -mt-9">
                                        <FormField
                                            control={form.control}
                                            name="gpa"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
                                                        GPA
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Write here"
                                                            {...field}
                                                            className="w-full h-[47px] border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292]"
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-red-500" />
                                                </FormItem>
                                            )}
                                        />

                                    </div>
                                )}

                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <FormField
                                control={form.control}
                                name="schoolName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">School Name</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[47px]  border border-[#645949] rounded-[8px] text-[#131313] placeholder:text-[#929292] text-sm font-normal leading-[150%]" placeholder="AAAAAA" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />

                        </div>



                        <div className="w-full flex items-center justify-end">
                            <Button className="h-[48px] px-10 py-2 rounded-[10px] text-base font-semibold text-white leading-[120%]" disabled={isPending} type="submit">{isPending ? "Updating..." : "Update Profile"}</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default PersonalInformationForm