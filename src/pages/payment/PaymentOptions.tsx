import { motion } from 'motion/react';
import { ChangeEvent, useState } from 'react';

import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const PaymentOptionsPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  // const navigate = useNavigate();

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const handleProceed = () => {
    if (!selectedOption) {
      alert('Please select a payment option.');
      return;
    }

    if (
      selectedOption === 'aamarPay' ||
      selectedOption === 'cashOnDelivery'
    ) {
      return toast.warning(
        'aamarPay Or cashOnDelivery Not implemented yet! please try with stripe',
      );
    }

    console.log(selectedOption);
    // navigate(`/checkout/${selectedOption}`);
  };

  return (
    <div className="mt-[80px] flex min-h-screen justify-center bg-gray-50 sm:px-6 md:mt-0 md:py-12 lg:px-8">
      <div className="relative z-10 flex w-full justify-center">
        <motion.div
          className="w-full max-w-md rounded-lg bg-white p-1 shadow-lg md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex justify-center">
            <SectionHeading heading="Select Payment Option" />
          </div>

          <form className="space-y-6">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <input
                  id="stripe"
                  type="radio"
                  value="stripe"
                  checked={selectedOption === 'stripe'}
                  onChange={handleOptionChange}
                  className="h-4 w-4 border-gray-300 text-green-700 focus:ring-green-500"
                />
                <label
                  htmlFor="stripe"
                  className="ml-3 block text-sm font-medium text-gray-800"
                >
                  Stripe
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="aamarPay"
                  type="radio"
                  value="aamarPay"
                  checked={selectedOption === 'aamarPay'}
                  onChange={handleOptionChange}
                  className="h-4 w-4 border-gray-300 text-green-700 focus:ring-green-500"
                />
                <label
                  htmlFor="aamarPay"
                  className="ml-3 block text-sm font-medium text-gray-800"
                >
                  AAmarPay
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="cashOnDelivery"
                  type="radio"
                  value="cashOnDelivery"
                  checked={selectedOption === 'cashOnDelivery'}
                  onChange={handleOptionChange}
                  className="h-4 w-4 border-gray-300 text-green-700 focus:ring-green-500"
                />
                <label
                  htmlFor="cashOnDelivery"
                  className="ml-3 block text-sm font-medium text-gray-800"
                >
                  Cash on Delivery
                </label>
              </div>
            </motion.div>

            <div className="mt-6">
              <Button
                type="button"
                className="w-full"
                onClick={handleProceed}
              >
                Proceed
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentOptionsPage;
