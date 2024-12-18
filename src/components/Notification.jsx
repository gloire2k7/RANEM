const Notification = ({ message, type }) => {
    return (
      <div className={`p-4 rounded-md ${type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
        {message}
      </div>
    );
  };
  
  export default Notification;
  