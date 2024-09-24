const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "bg-gradient-to-br from-emerald-400 to-cyan-400 h-screen flex items-center justify-center"
      }
    >
      {children}
    </div>
  );
};

export default GradientBackground;
