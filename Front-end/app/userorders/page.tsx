import React from "react";
import Layout from "../../components/layout";

const OrdersPage = () => {
  // Sample construction orders data
  const orders = [
    {
      id: "CON-2023-7890",
      date: "November 5, 2023",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-800",
      site: {
        name: "Downtown Tower Project",
        manager: "Ahmed Al-Mansoori",
        address: "Sheikh Zayed Road, Trade Center Area, Dubai",
        phone: "+971 50 123 4567",
        reference: "DT-2023-B2"
      },
      materials: [
        {
          name: "Portland Cement",
          type: "Type V (Sulfate Resistant)",
          quantity: "800 Bags",
          unit: "50kg Bag",
          price: "AED 22.50",
          total: "AED 18,000.00",
          supplier: "Emirates Cement Co."
        },
        {
          name: "Steel Rebar",
          type: "Grade 60",
          quantity: "5 Tons",
          unit: "Ton",
          price: "AED 2,850.00",
          total: "AED 14,250.00",
          supplier: "Gulf Steel"
        },
        {
          name: "Concrete Blocks",
          type: "20cm Hollow",
          quantity: "2,500 Pieces",
          unit: "Piece",
          price: "AED 1.20",
          total: "AED 3,000.00",
          supplier: "Al Ain Blocks"
        }
      ],
      payment: {
        method: "Bank Transfer",
        terms: "30 Days NET",
        poNumber: "PO-7890-2023"
      },
      delivery: {
        expected: "November 12, 2023",
        instructions: [
          "Deliver between 6:00 AM - 2:00 PM",
          "Use service entrance on west side",
          "Crane available on site for unloading",
          "Store materials in designated area B2"
        ],
        tracking: [
          { stage: "Order Confirmed", date: "Nov 5", completed: true },
          { stage: "Materials Sourced", date: "Nov 7", completed: true },
          { stage: "Quality Check", date: "Nov 9", completed: false },
          { stage: "Dispatched", date: "", completed: false },
          { stage: "Delivered", date: "", completed: false }
        ]
      },
      totals: {
        subtotal: "AED 35,250.00",
        delivery: "AED 1,200.00",
        vat: "AED 1,762.50",
        total: "AED 38,212.50"
      }
    }
  ];

  const currentOrder = orders[0];

  return (
    <Layout>
      <div className="text-black ml-20 mr-10 flex flex-row justify-between gap-8">
        {/* Left Column - Orders List */}
        <div className="w-1/3">
          <div className="mb-8">
            <h1 className="text-6xl text-[#003B63] font-bold">Orders</h1>
            <p className="text-gray-500">Manage construction material orders</p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Active Orders</h2>
              <span className="text-sm text-gray-500">3 orders in progress</span>
            </div>
            
            <div className="space-y-4">
              {/* Order List Item */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">#CON-2023-7890</h3>
                    <p className="text-gray-600">Downtown Tower Project</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Priority
                  </span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm">12 items</span>
                  <span className="text-sm font-medium">AED 38,212.50</span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Due: Nov 12, 2023</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    Processing
                  </span>
                </div>
              </div>
              
              {/* Second Order List Item */}
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-lg">#CON-2023-6543</h3>
                    <p className="text-gray-600">Palm Jumeirah Villa</p>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm">8 items</span>
                  <span className="text-sm font-medium">AED 15,780.00</span>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Due: Nov 15, 2023</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    In Transit
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Quick Filters</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 bg-[#003B63] text-white rounded-full text-sm">
                All Orders
              </button>
              <button className="px-3 py-1 border border-[#003B63] rounded-full text-sm">
                Today
              </button>
              <button className="px-3 py-1 border border-[#003B63] rounded-full text-sm">
                This Week
              </button>
              <button className="px-3 py-1 border border-[#003B63] rounded-full text-sm">
                High Priority
              </button>
              <button className="px-3 py-1 border border-[#003B63] rounded-full text-sm">
                Delayed
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Search</h2>
            <input
              type="text"
              placeholder="Search by PO#, Project, or Material"
              className="border border-[#003B63] rounded-full w-full h-10 p-2 px-4"
            />
          </div>
        </div>
        
        {/* Right Column - Order Details */}
        <div className="w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Order Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-[#003B63]">
                  Order #{currentOrder.id}
                </h2>
                <p className="text-gray-500">
                  Project: {currentOrder.site.name} • {currentOrder.date}
                </p>
              </div>
              <div className={`${currentOrder.statusColor} px-4 py-2 rounded-full text-sm font-medium`}>
                {currentOrder.status}
              </div>
            </div>

            {/* Tracking Progress */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Delivery Status</h3>
              <div className="flex items-center">
                {currentOrder.delivery.tracking.map((step, index) => (
                  <React.Fragment key={step.stage}>
                    <div className="flex flex-col items-center mx-4">
                      <div className={`w-8 h-8 ${step.completed ? 'bg-[#003B63]' : 'bg-gray-300'} rounded-full flex items-center justify-center text-white`}>
                        {step.completed ? '✓' : index + 1}
                      </div>
                      <p className="text-sm mt-2 text-center">{step.stage}</p>
                      {step.date && <p className="text-xs text-gray-500">{step.date}</p>}
                    </div>
                    {index < currentOrder.delivery.tracking.length - 1 && (
                      <div className={`h-1 w-16 ${step.completed ? 'bg-[#003B63]' : 'bg-gray-300'}`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Site & Delivery Info */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Site Information</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">{currentOrder.site.name}</p>
                  <p className="text-gray-700">Site Manager: {currentOrder.site.manager}</p>
                  <p className="text-gray-700">{currentOrder.site.address}</p>
                  <p className="text-gray-700">Phone: {currentOrder.site.phone}</p>
                  <p className="text-gray-700 mt-2">Site Reference: {currentOrder.site.reference}</p>
                  <p className="text-gray-700">Expected Delivery: {currentOrder.delivery.expected}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span>Method:</span>
                    <span className="font-medium">{currentOrder.payment.method}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Terms:</span>
                    <span>{currentOrder.payment.terms}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>PO Number:</span>
                    <span>{currentOrder.payment.poNumber}</span>
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-200">
                    <div className="flex justify-between font-medium">
                      <span>Order Total:</span>
                      <span>{currentOrder.totals.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Materials */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Materials Ordered</h3>
                <button className="text-[#003B63] text-sm font-medium">
                  + Add Material
                </button>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 bg-gray-100 p-3 font-medium">
                  <div className="col-span-5">Material & Supplier</div>
                  <div className="col-span-2 text-center">Specifications</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Unit Price</div>
                  <div className="col-span-1 text-right">Total</div>
                </div>
                
                {currentOrder.materials.map((material, index) => (
                  <div key={index} className="grid grid-cols-12 p-3 border-b items-center">
                    <div className="col-span-5 flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded mr-3 flex items-center justify-center">
                        {material.name.includes("Cement") ? "🏗️" : 
                         material.name.includes("Steel") ? "🔩" : "🧱"}
                      </div>
                      <div>
                        <p className="font-medium">{material.name}</p>
                        <p className="text-gray-500 text-xs">{material.supplier}</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-center text-sm">
                      {material.type}
                      <p className="text-gray-500 text-xs">{material.unit}</p>
                    </div>
                    <div className="col-span-2 text-center text-sm">
                      {material.quantity}
                    </div>
                    <div className="col-span-2 text-center text-sm">
                      {material.price}
                    </div>
                    <div className="col-span-1 text-right text-sm font-medium">
                      {material.total}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end mt-4">
                <div className="w-80">
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Subtotal:</span>
                    <span>{currentOrder.totals.subtotal}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Delivery Fee:</span>
                    <span>{currentOrder.totals.delivery}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>VAT (5%):</span>
                    <span>{currentOrder.totals.vat}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>{currentOrder.totals.total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-[#003B63] mb-2">Delivery Instructions</h4>
              <ul className="list-disc list-inside space-y-1">
                {currentOrder.delivery.instructions.map((instruction, index) => (
                  <li key={index} className="text-gray-700 text-sm">{instruction}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button className="px-4 py-2 border border-[#003B63] text-[#003B63] rounded-lg">
                Print Order
              </button>
              <button className="px-4 py-2 bg-[#003B63] text-white rounded-lg">
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrdersPage;