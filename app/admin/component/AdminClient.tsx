"use server";

import ProductGrid, { ProductGridProps } from "@/app/ui/ProductGrid";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Link from "next/link";
import AdminOrdersList from "./AdminOrdersList";

function AdminClient({ products }: ProductGridProps) {
  return (
    <section>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "30px",
          marginRight: "30px",
        }}
      >
        <Link href="/admin/product/new">
          <AddIcon
            data-cy="admin-add-product"
            sx={{
              color: "black",
              padding: "20px",
              fontSize: "52px",
              borderRadius: "999px",
              transition: "background-color 0.3s",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                background: "#f5f5f5",
              },
            }}
          />
        </Link>
      </Box>
      <AdminOrdersList />
      <ProductGrid products={products} />
    </section>
  );
}

export default AdminClient;