"use client";

import { useEffect } from "react";
import axios from "axios";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AdminHome() {
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get("/api/products");
        await axios.get("/api/orders");
        await axios.get("/api/users");
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
      }
    };

    fetchData();
  }, []);

  const sections = [
    {
      label: "Quản lý Sản Phẩm",
      href: "/admin/products",
      image: "/images/product.png", // ảnh minh họa
    },
    {
      label: "Quản lý Danh Mục",
      href: "/admin/categories",
      image: "/images/category.png",
    },
    {
      label: "Quản lý Đơn Hàng",
      href: "/admin/orders",
      image: "/images/order.png",
    },
    {
      label: "Quản lý Người Dùng",
      href: "/admin/users",
      image: "/images/user.png",
    },
    {
      label: "Quản lý Liên Hệ",
      href: "/admin/contact",
      image: "/images/contact.png",
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Trang Quản Trị
      </Typography>

      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item xs={12} sm={6} md={4} key={section.href}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
              onClick={() => router.push(section.href)}
            >
              <img
                src={section.image}
                alt={section.label}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "1rem",
                }}
              />
              <Typography variant="h6">{section.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
