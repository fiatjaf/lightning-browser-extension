import React from "react";

type Props = {
  title: string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
};

function Header({ title, headerLeft, headerRight }: Props) {
  return (
    <div className="flex justify-between px-4 py-3 border-b border-gray-200">
      <div className="flex items-center">
        {headerLeft && <div className="mr-3">{headerLeft}</div>}
        <h1 className="text-lg font-medium">{title}</h1>
      </div>
      {headerRight}
    </div>
  );
}

export default Header;