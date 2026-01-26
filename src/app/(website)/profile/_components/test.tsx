import React from 'react'

const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test












//    <FormField
//                                 control={form.control}
//                                 name="phone"
//                                 render={({ field }) => (
//                                     <FormItem>
//                                         <FormLabel className="text-base font-normal leading-[150%] text-[#131313]">
//                                             Phone Number
//                                         </FormLabel>

//                                         <FormControl>
//                                             <div className="flex gap-3">
//                                                 {/* Country Code */}
//                                                 <Select
//                                                     value={field.value?.startsWith("+")
//                                                         ? field.value.split(" ")[0]
//                                                         : "+1"}
//                                                     onValueChange={(code) => {
//                                                         const number = field.value?.replace(/^\+\d+\s*/, "") || ""
//                                                         field.onChange(`${code} ${number}`)
//                                                     }}
//                                                 >
//                                                     <SelectTrigger className="w-[110px] h-[47px] border border-[#645949] rounded-[8px]">
//                                                         <SelectValue />
//                                                     </SelectTrigger>
//                                                     <SelectContent className="h-[250px]  md:h-[300px] overflow-auto">
//                                                         {/* North America */}
//                                                         <SelectItem value="+1">🇺🇸 +1</SelectItem>
//                                                         {/* <SelectItem value="+1">🇨🇦 +1</SelectItem> */}

//                                                         {/* <SelectItem value="+1">🇺🇸/🇨🇦 +1</SelectItem> */}


//                                                         {/* Europe */}
//                                                         <SelectItem value="+44">🇬🇧 +44</SelectItem>
//                                                         <SelectItem value="+33">🇫🇷 +33</SelectItem>
//                                                         <SelectItem value="+49">🇩🇪 +49</SelectItem>
//                                                         <SelectItem value="+39">🇮🇹 +39</SelectItem>
//                                                         <SelectItem value="+34">🇪🇸 +34</SelectItem>
//                                                         <SelectItem value="+31">🇳🇱 +31</SelectItem>
//                                                         <SelectItem value="+46">🇸🇪 +46</SelectItem>
//                                                         <SelectItem value="+41">🇨🇭 +41</SelectItem>
//                                                         <SelectItem value="+48">🇵🇱 +48</SelectItem>
//                                                         <SelectItem value="+351">🇵🇹 +351</SelectItem>

//                                                         {/* Asia */}
//                                                         <SelectItem value="+880">🇧🇩 +880</SelectItem>
//                                                         <SelectItem value="+91">🇮🇳 +91</SelectItem>
//                                                         <SelectItem value="+92">🇵🇰 +92</SelectItem>
//                                                         <SelectItem value="+94">🇱🇰 +94</SelectItem>
//                                                         <SelectItem value="+86">🇨🇳 +86</SelectItem>
//                                                         <SelectItem value="+81">🇯🇵 +81</SelectItem>
//                                                         <SelectItem value="+82">🇰🇷 +82</SelectItem>
//                                                         <SelectItem value="+62">🇮🇩 +62</SelectItem>
//                                                         <SelectItem value="+60">🇲🇾 +60</SelectItem>
//                                                         <SelectItem value="+66">🇹🇭 +66</SelectItem>
//                                                         <SelectItem value="+63">🇵🇭 +63</SelectItem>

//                                                         {/* Middle East */}
//                                                         <SelectItem value="+971">🇦🇪 +971</SelectItem>
//                                                         <SelectItem value="+966">🇸🇦 +966</SelectItem>
//                                                         <SelectItem value="+974">🇶🇦 +974</SelectItem>
//                                                         <SelectItem value="+965">🇰🇼 +965</SelectItem>
//                                                         <SelectItem value="+968">🇴🇲 +968</SelectItem>
//                                                         <SelectItem value="+972">🇮🇱 +972</SelectItem>

//                                                         {/* Africa */}
//                                                         <SelectItem value="+20">🇪🇬 +20</SelectItem>
//                                                         <SelectItem value="+234">🇳🇬 +234</SelectItem>
//                                                         <SelectItem value="+254">🇰🇪 +254</SelectItem>
//                                                         <SelectItem value="+27">🇿🇦 +27</SelectItem>
//                                                         <SelectItem value="+212">🇲🇦 +212</SelectItem>

//                                                         {/* Oceania */}
//                                                         <SelectItem value="+61">🇦🇺 +61</SelectItem>
//                                                         <SelectItem value="+64">🇳🇿 +64</SelectItem>

//                                                         {/* South America */}
//                                                         <SelectItem value="+55">🇧🇷 +55</SelectItem>
//                                                         <SelectItem value="+54">🇦🇷 +54</SelectItem>
//                                                         <SelectItem value="+57">🇨🇴 +57</SelectItem>
//                                                         <SelectItem value="+56">🇨🇱 +56</SelectItem>
//                                                         <SelectItem value="+51">🇵🇪 +51</SelectItem>

//                                                     </SelectContent>
//                                                 </Select>

//                                                 {/* Phone Number */}
//                                                 <Input
//                                                     placeholder="1712345678"
//                                                     value={field.value?.replace(/^\+\d+\s*/, "") || ""}
//                                                     onChange={(e) => {
//                                                         const code = field.value?.match(/^\+\d+/)?.[0] || "+1"
//                                                         field.onChange(`${code} ${e.target.value}`)
//                                                     }}
//                                                     className="flex-1 h-[47px] border border-[#645949] rounded-[8px]"
//                                                 />
//                                             </div>
//                                         </FormControl>

//                                         <FormMessage className="text-red-500" />
//                                     </FormItem>
//                                 )}
//                             />