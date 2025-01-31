interface HeadlineProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLButtonElement> {}

export const Headline: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="md:w-16 md:h-1 w-16 h-[3px] bg-highlight rounded-lg"></div>
      <h1 className="text-highlight text-kaushan-script text-2xl md:text-3xl lg:text-4xl text-center">
        {children}
      </h1>
      <div className="md:w-16 md:h-1 w-16 h-[3px] bg-highlight rounded-lg"></div>
    </div>
  );
};

export const InvertedHeadline: React.FC<HeadlineProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-16 h-1 bg-black rounded-lg"></div>
      <h1 className="text-black text-kaushan-script text-4xl">{children}</h1>
      <div className="w-16 h-1 bg-black rounded-lg"></div>
    </div>
  );
};
