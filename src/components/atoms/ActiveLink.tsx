"use client";

import { type UrlObject } from "url";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";

export const ActiveLink = ({
	href,
	children,
}: {
	href: UrlObject | Route<string>;
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			prefetch={true}
			className={clsx(
				`text-blue-300 hover:text-blue-500`,
				isActive && `underline underline-offset-4`,
			)}
		>
			<span>{children}</span>
		</Link>
	);
};
