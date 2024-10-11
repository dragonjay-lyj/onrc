// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@nextui-org/navbar';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { MoonIcon, SunIcon } from '@nextui-org/shared-icons';
import GameIconsCardRandom from "./GameIconsCardRandom";
import MaterialSymbolsLightFamilyHomeRounded from "../components/MaterialSymbolsLightFamilyHomeRounded";
import UimCommentMessage from "../components/UimCommentMessage";
import PhSealQuestionDuotone from "../components/PhSealQuestionDuotone";
import { getCollection } from 'astro:content';

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 从 localStorage 获取主题偏好
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme); // 保存用户的主题选择
  };

  const handleRandomJump = async () => {
    const allPages = await getCollection('game');
    const pages = await Promise.all(allPages.map(async (page) => {
      return {
          slug: page.slug,
      };
  }));
    const randomIndex = Math.floor(Math.random() * pages.length);
    const { slug } = pages[randomIndex];
    const randomPage = `game/${slug}`;
    window.location.href = `/${randomPage}`;
  };
  
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
          游戏合集
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
        <Button as={Link} startContent={<MaterialSymbolsLightFamilyHomeRounded/>} href="/" variant="light">首页</Button >
        </NavbarItem>
        <NavbarItem>
        <Button variant="light" onPress={handleRandomJump} startContent={<GameIconsCardRandom/>}>随机</Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light" href="/faq" startContent={<PhSealQuestionDuotone/>}>FAQ</Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light" href="/message-board" startContent={<UimCommentMessage/>}>留言板</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Input placeholder="搜索帖子" />
        </NavbarItem>
        <NavbarItem>
          <Button isIconOnly onClick={toggleTheme}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
        <Button as={Link} startContent={<MaterialSymbolsLightFamilyHomeRounded/>} href="/" variant="light">首页</Button >
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Button variant="light" onPress={handleRandomJump} startContent={<GameIconsCardRandom/>}>随机</Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} variant="light" href="/faq" startContent={<PhSealQuestionDuotone/>}>FAQ</Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} variant="light" href="/message-board" startContent={<UimCommentMessage/>}>留言板</Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Input placeholder="搜索帖子" />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <ButtonGroup>
            <Button onClick={toggleTheme}>
              {isDark ? '明亮模式' : '暗黑模式'}
            </Button>
          </ButtonGroup>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
