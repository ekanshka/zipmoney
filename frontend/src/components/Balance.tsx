import { useBalance } from "../hooks/useBalance";

export const Balance = () => {
  const { balance, loading } = useBalance();

  return (
    <section className="w-[95%] p-5 rounded-2xl border font-semibold shadow-sm text-sm sm:text-base md:text-lg flex flex-col md:flex-row justify-start items-start">
      {loading ? (
        <div className="text-base md:text-lg">loading balance...</div>
      ) : (
        <div>
          <span className="text-base md:text-lg">Your Balance </span>
          <span className="text-base md:text-lg md:ml-4">Rs. {balance}</span>
        </div>
      )}
    </section>
  );
};
