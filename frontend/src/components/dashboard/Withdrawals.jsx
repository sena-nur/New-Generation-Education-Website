import React from "react";

const Withdrawals = () => {
  return (
    <div className="container  mt-24 mx-28 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Withdrawals</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Withdrawal History</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-6">2023-06-01</td>
              <td className="py-4 px-6">$500</td>
              <td className="py-4 px-6">Completed</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-6">2023-05-15</td>
              <td className="py-4 px-6">$750</td>
              <td className="py-4 px-6">Pending</td>
            </tr>
            {/* Add more rows for withdrawal history */}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Request Withdrawal</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-bold mb-2"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Enter withdrawal amount"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 font-bold mb-2"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            >
              <option value="">Select payment method</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
              {/* Add more payment method options */}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Submit Withdrawal Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdrawals;
