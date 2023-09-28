const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div
  className='flex flex-col h-[400px] items-center gap-2'
      >
        {children}
      </div>
    </div>
  );
};
export default FormWrap;
