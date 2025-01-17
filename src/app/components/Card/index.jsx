export default function Card({ alias, satoshis, fiat, color, currency }) {
  return (
    <div className={`${color} h-36 rounded-lg pt-6 dark:bg-gray-600`}>
      <p className="font-normal text-black ml-6 dark:text-white">{alias}</p>
      <p className="text-2xl font-bold text-black ml-6 mt-2 dark:text-white">
        {satoshis}
      </p>
      <p className="font-normal text-white ml-6 mt-1">
        {fiat} {currency}
      </p>
    </div>
  );
}
