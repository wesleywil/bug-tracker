const BugBadge = ({ status, qtd, color }) => {
  return (
    <div className="flex flex-col border-2 p-2 text-center rounded-xl bg-slate-700  font-semibold">
      <span className={color}>{status}</span>
      <span className={color}>{qtd}</span>
    </div>
  );
};

export default BugBadge;
