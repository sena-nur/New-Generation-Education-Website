import React from "react";

const PurchaseHistory = () => {
  // Sample purchase history data
  const purchases = [
    {
      id: 1,
      type: "Course",
      name: "Introduction to React",
      date: "2023-05-15",
      price: 49.99,
    },
    {
      id: 2,
      type: "Mentorship",
      name: "1-on-1 JavaScript Mentoring",
      date: "2023-05-10",
      price: 99.99,
    },
    {
      id: 3,
      type: "Course",
      name: "Advanced CSS Techniques",
      date: "2023-04-25",
      price: 29.99,
    },
    {
      id: 4,
      type: "Course",
      name: "Introduction to React",
      date: "2023-05-15",
      price: 49.99,
    },
    {
      id: 5,
      type: "Mentorship",
      name: "1-on-1 JavaScript Mentoring",
      date: "2023-05-10",
      price: 99.99,
    },
    {
      id: 6,
      type: "Course",
      name: "Advanced CSS Techniques",
      date: "2023-04-25",
      price: 29.99,
    },
  ];

  return (
    <div className="container mx-auto mt-28 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Purchase History</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-right">Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {purchases.map((purchase) => (
              <tr
                key={purchase.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-6">{purchase.type}</td>
                <td className="py-4 px-6">{purchase.name}</td>
                <td className="py-4 px-6">{purchase.date}</td>
                <td className="py-4 px-6 text-right">
                  ${purchase.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseHistory;
