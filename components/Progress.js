export default function Progress({ className, color, height, percent }) {
  return (
    <div className={`
      ${className ? className + " " : ""}
      ${height ? height + " " : "h-1"}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
    >
      <div className={`${height ? height + " " : "h-1"} ${color ? color : "bg-blue-500"} rounded-full`}
        style={{ width: `${percent}%` }}
      >
      </div>
    </div>
  );
}
Progress.percentage = ({ className, color, percent }) => {
  return (
    <div className={`
      ${className ? className + " " : ""}
      w-full bg-gray-200 dark:bg-neutral-800 rounded-full`}
    >
      <div className={`${color ? color : "bg-blue-500"}rounded-full text-center text-white text-xs leading-none font-medium p-0.5`}
        style={{ width: `${percent}%` }}
      >
        {percent} %
      </div>
    </div>
  );
}
