const ForgotPassword = () => {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 mb-6 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-main text-white py-2 rounded hover:bg-green-600"
          >
            Reset Password
          </button>
        </form>
      </div>
    );
  };
  
  export default ForgotPassword;
  