// import Image from "next/image";

// import { notFound } from "next/navigation";

// export default async function page({ params }) {
//   const { id } = params;

//   const res = await fetch(`https://api.github.com/users/${id}`);

//   if (res.status !== 200) {
//     notFound();
//   }

//   const data = await res.json();

//   return (
//     <div>
//       page {data.name}
//       <br />
//       <p>
//         follower
//         {data.followers} following {data.following}
//       </p>
//       <br />
//       <Image src={data.avatar_url} alt={data.name} width={200} height={200} />
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page