import React, { useState } from "react";
import { auth } from "../../../utils/firebase";
import { Tabs } from "@mantine/core";
import { Menu, Button, Text } from "@mantine/core";
import { ClassRoutine, ExamRoutine, Syllabus, Result } from "../StudentMenu";
import Notice from '../Notice'
const StudentDashboard = ({ user }) => {
  const logout = () => {
    auth.signOut().catch((err) => alert(err.message));
  };
  const [opened, setOpened] = useState(false);
  return (
    <div className="py-8">
      <div className="container">
        <div>
          <div className="flex justify-end items-end">
            <Menu onChange={() => setOpened(!opened)} shadow="md" width={200}>
              <Menu.Target className="bg-white border hover:bg-green-400 border-gray-300 "> 
                <Button className="h-[50px]">
                  <div className="flex">
                  <img className="w-10 rounded-full" src={user?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} alt="" />
                  <div className="flex flex-col justify-center pl-2">
                  <span className="text-black">{user?.displayName}</span>
                  <span className="text-black">{user?.email}</span>
                  </div>
                  </div>
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item color="red" className="font-semibold" onClick={logout}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <h1 className="flex justify-center md:text-3xl text-xl relative font-bold pt-7 text-green-500">
            Welcome Dashboard
            <span className="absolute gap-2 w-[340px] h-1 rounded-2xl -bottom-2 bg-green-500"></span>
          </h1>
          <div className="py-10">
            <Tabs color="violet" defaultValue="gallery">
              <Tabs.List grow>
                <Tabs.Tab value="notice" >নোটিশ</Tabs.Tab>
                <Tabs.Tab value="classroutine">ক্লাস রুটিন</Tabs.Tab>
                <Tabs.Tab value="syllasbus">সিলেবাস</Tabs.Tab>
                <Tabs.Tab value="examroutine">পরীক্ষার রুটিন</Tabs.Tab>
                <Tabs.Tab value="result">রেজাল্ট</Tabs.Tab>
              </Tabs.List>
             
              <Tabs.Panel value="notice" pt="xs">
                <Notice/>
              </Tabs.Panel>

              <Tabs.Panel value="classroutine" pt="xs">
                <ClassRoutine />
              </Tabs.Panel>

              <Tabs.Panel value="syllasbus" pt="xs">
                <Syllabus />
              </Tabs.Panel>
              <Tabs.Panel value="examroutine" pt="xs">
                <ExamRoutine />
              </Tabs.Panel>
              <Tabs.Panel value="result" pt="xs">
                <Result />
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default StudentDashboard;
