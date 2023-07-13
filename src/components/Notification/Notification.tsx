interface INotification {
  value: string;
}

const Notification: React.FC<INotification> = ({ value }) => {
  return (
    <div className="absolute bottom-0 right-0 rounded-lg bg-red-400 px-10 py-5 text-cyan-50">
      {value}
    </div>
  );
};

export default Notification;
