"use client";

import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [user, setUser] = useState("");
  const [githubDetail, setGithubDetail] = useState(null);
  const userData = useSelector((state) => state.username.GithubUser);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  useEffect(() => {
    if (!user) return; // don't fetch if user is empty

    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
        setGithubDetail(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <>
      <Link href={"/"}>
        <button className="btn bg-white text-black">Search Another One</button>
      </Link>
      <div>page</div>
      <div>User from Redux: {user}</div>

      {githubDetail && (
        <div>
          <h2>{githubDetail.name}</h2>
          <p>{githubDetail.bio}</p>
          <img
            src={githubDetail.avatar_url}
            alt={githubDetail.login}
            width={100}
          />
          {/* Add more details as you want */}
        </div>
      )}
    </>
  );
};

export default Page;
