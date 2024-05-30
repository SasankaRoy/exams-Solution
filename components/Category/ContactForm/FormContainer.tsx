export const FormContainer = () => {
  return (
    <div className=" w-[50%]">
      <div>
        <h2 className="text-[#FFF] font-[Bakbak One] font-[600] text-5xl mb-6">
          Let’s get in touch
        </h2>

        <div className=" w-[70%] ">
          <h3 className="text-base font-[Poppins] font-[600] text-[#FFF] my-2">
            Send a Message
          </h3>
          <p className="font-[Poppins] font-[400] text-sm text-[#FFF]">
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim. Done
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-4 my-4 w-[70%] ">
          <div className="flex justify-center items-center gap-3 w-full">
            <div className="w-full">
              <input className="inputBgColor w-full px-4 text-sm py-2 rounded-md font-[Poppins] font-[400] border-none outline-none" type="text" placeholder="Name..." />
            </div>
            <div className="w-full">
              <input className="inputBgColor w-full px-4 text-sm py-2 rounded-md font-[Poppins] font-[400] border-none outline-none" type="text" placeholder="Email ID..." />
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 w-full">
            <div className="w-full">
              <input className="inputBgColor w-full px-4 text-sm py-2 rounded-md font-[Poppins] font-[400] border-none outline-none" type="text" placeholder="Phone Number..." />
            </div>
            <div className="w-full">
              <input className="inputBgColor w-full px-4 text-sm py-2 rounded-md font-[Poppins] font-[400] border-none outline-none" type="text" placeholder="Subject..." />
            </div>
          </div>

          <div className="w-full">
            <textarea className="inputBgColor w-full px-4 text-sm py-2 rounded-md font-[Poppins] font-[400] border-none outline-none" placeholder="Message..." rows={5} name="message" id=""></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
