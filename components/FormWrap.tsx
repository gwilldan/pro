const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div
  className='flex flex-col h-[300px] items-center justify-between'
      >
        {children}
      </div>
    </div>
  );
};
export default FormWrap;
