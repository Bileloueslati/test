import { ComponentType, FunctionComponent, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  type: keyof JSX.IntrinsicElements | ComponentType<{}>;
}>;

const Tag: FunctionComponent<Props> = ({ children, type: Type }) => {
  return (
    <Type className="text-center border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
      {children}
    </Type>
  );
};

export default Tag;
