import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { Menu, Button, Text } from "@mantine/core";
import { auth } from "../utils/firebase";
import TsList from "../components/Admin All/TsList";
import Notice from "../components/Admin All/Notice/Notice";

const AdminDashboard = ({ user }) => {
  const logout = () => {
    auth.signOut().catch((err) => alert(err.message));
  };
  const [opened, setOpened] = useState(false);
  return (
    <>
    <div className="pt-5 flex justify-end items-end">
    <Menu onChange={() => setOpened(!opened)} shadow="md" width={200}>
        <Menu.Target className="bg-white border hover:bg-green-400 border-gray-300 ">
          <Button className="h-[50px]">
            <div className="flex">
              <img
                className="w-10 rounded-full"
                src={
                  user?.photoURL ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
                alt=""
              />
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

      <div className="flex justify-start ">
        <Tabs
          color="dark"
          variant="outline"
          className="pt-10 gap-7"
          orientation="vertical"
          defaultValue="gallery"
        >
          <Tabs.List grow className=" font-semibold">
            <Tabs.Tab value="teacherlist">Teacherlist</Tabs.Tab>
            <Tabs.Tab value="notice">Notice</Tabs.Tab>
            <Tabs.Tab value="speciallink">Speciallink</Tabs.Tab>
            <Tabs.Tab value="classroutine">Classroutine</Tabs.Tab>
            <Tabs.Tab value="syllabus">Syllabus</Tabs.Tab>
            <Tabs.Tab value="examroutine">Examroutine</Tabs.Tab>
            <Tabs.Tab value="result">Result</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="teacherlist" pl="xs">
            <TsList/>
          </Tabs.Panel>

          <Tabs.Panel value="notice" pl="xs">
            <Notice/>
          </Tabs.Panel>

          <Tabs.Panel value="speciallink" pl="xs">
            speciallink tab content
          </Tabs.Panel>
          <Tabs.Panel value="classroutine" pl="xs">
            classroutine tab content
          </Tabs.Panel>
          <Tabs.Panel value="syllabus" pl="xs">
            syllabus tab content
          </Tabs.Panel>
          <Tabs.Panel value="examroutine" pl="xs">
            Examroutine tab content
          </Tabs.Panel>
          <Tabs.Panel value="result" pl="xs">
            result tab content
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};

export default AdminDashboard;
