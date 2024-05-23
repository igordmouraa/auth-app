// 'use client';

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FC, useEffect } from "react";
// import { redirect, usePathname, useSearchParams } from "next/navigation";
// import { User } from "firebase/auth";
// import auth from "@/firebase/auth/signUp"; 

// const DashboardPage: FC = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
//       if (!user) {
//         redirect("/login?callbackUrl=" + encodeURIComponent(pathname + "?" + searchParams.toString()));
//       }
//     });

//     return () => unsubscribe();
//   }, [pathname, searchParams]);

//   return (
//     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>Usuários Ativos</CardTitle>
//         </CardHeader>
//         <CardContent>120</CardContent>
//       </Card>
//       {/* Adicione mais cards aqui para outros dados */}
//     </div>
//   );
// };

// export default DashboardPage;
