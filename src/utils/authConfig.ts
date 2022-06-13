const authConfig = {
  secret: (process.env.SECRET_API || "2022vamostacaroterrornaterra"),
  expiresIn: '356d',
};

export default authConfig;
