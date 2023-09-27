const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div
  className='flex flex-col h-[600px]'
      >
        {children}
      </div>
    </div>
  );
};
export default FormWrap;
