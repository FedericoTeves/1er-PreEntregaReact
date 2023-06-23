import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const cartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="primary">
        <ShoppingCart color="action" />
      </Badge>
    </div>
  );
};

export default cartWidget;
