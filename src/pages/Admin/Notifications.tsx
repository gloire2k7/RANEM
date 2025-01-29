const dummyNotifications = [
    { id: 1, message: "New order from John Doe!" },
    { id: 2, message: "Feedback received: Great product!" },
  ];
  
  const Notifications = () => {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Notifications</h1>
        <ul className="space-y-2">
          {dummyNotifications.map((notification) => (
            <li
              key={notification.id}
              className="p-2 bg-gray-100 rounded shadow"
            >
              {notification.message}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Notifications;
  