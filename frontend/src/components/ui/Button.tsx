interface IButton {
  children: React.ReactNode;
  loading: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick, loading }: IButton) => {
  if (loading) {
    return (
      <button
        disabled={true}
        className="bg-slate-950 shadow-md text-white px-3 py-2 rounded-lg text-xs sm:text-base md:text-lg hover:bg-slate-950 ease-in duration-300 hover:scale-105"
        onClick={onClick}
      >
        Loading...
      </button>
    );
  } else {
    return (
      <button
        className="bg-slate-950 shadow-md text-white px-3 py-2 rounded-lg text-xs sm:text-base md:text-lg hover:bg-slate-950 ease-in duration-300 hover:scale-105"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};
