"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-purple-400">Navigation</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const groupClass = `group-${item.title.replace(/\s+/g, "-").toLowerCase()}`;
          const hoverTextClass = `group-hover/${groupClass}:text-purple-500`;
          const hasChildren = item.items && item.items.length > 0;

          return hasChildren ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className={`group/collapsible-${groupClass}`}
            >
              <div className={`group ${groupClass}`}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      className={`text-white ${hoverTextClass}`}
                      tooltip={item.title}
                    >
                      {item.icon && (
                        <item.icon className={`text-purple-400 ${hoverTextClass}`} />
                      )}
                      <span className={`text-gray-500 ${hoverTextClass}`}>
                        {item.title}
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item?.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            className={`text-gray-500 ${hoverTextClass} hover:text-purple-500`}
                            asChild
                          >
                            <a href={subItem.url}>
                              <span className={hoverTextClass}>
                                {subItem.title}
                              </span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </div>
            </Collapsible>
          ) : (
            <div key={item.title} className={`group ${groupClass}`}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className={`text-white ${hoverTextClass}`}
                  asChild
                  tooltip={item.title}
                >
                  <a href={item.url} className="flex items-center w-full gap-2">
                    {item.icon && (
                      <item.icon className={`text-purple-400 ${hoverTextClass}`} />
                    )}
                    <span className={`text-gray-500 ${hoverTextClass}`}>
                      {item.title}
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </div>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
