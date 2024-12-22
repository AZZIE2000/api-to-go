import Fastify from "fastify";

const fastify = Fastify();

fastify.get("/trackShipment", async (request, reply) => {
  const { shipmentId } = request.query as { shipmentId: string };
  console.log(shipmentId);
  if (!shipmentId) {
    return reply.code(400).send("shipmentId is required");
  }

  const shipments: Record<string, any>[] = [
    {
      id: "1231",
      name: "Fahad Al-Harbi",
      location: {
        long: 46.6753,
        lat: 24.7136,
      },
      status: "In Delivery",
      status_ar: "قيد التوصيل",
      deliveryDate: "2024-12-12",
      expectedArrival: "2024-12-27",
      shipmentDetails: {
        weight: "5 kg",
        dimensions: "30x20x15 cm",
        description: "Laptop",
      },
      paymentStatus: "Paid",
      clientDetails: {
        phone: "+966501234567",
        email: "fahad.harbi@example.com",
        address: "Riyadh, KSA",
      },
    },
    {
      id: "1232",
      name: "Abeer Al-Qahtani",
      location: {
        long: 39.1972,
        lat: 21.4858,
      },
      status: "in process",
      deliveryDate: "2024-12-08",
      expectedArrival: "2024-12-20",
      shipmentDetails: {
        weight: "1.5 kg",
        dimensions: "20x15x10 cm",
        description: "Smartphone",
      },
      paymentStatus: "Pending",
      clientDetails: {
        phone: "+966503456789",
        email: "abeer.qahtani@example.com",
        address: "Jeddah, KSA",
      },
    },
    {
      id: "1233",
      name: "Sultan Al-Otaibi",
      location: {
        long: 50.0115,
        lat: 26.4207,
      },
      status: "Awaiting Pickup",
      deliveryDate: null,
      expectedArrival: "2024-12-09",
      shipmentDetails: {
        weight: "3 kg",
        dimensions: "25x20x10 cm",
        description: "Gaming Console",
      },
      paymentStatus: "Paid",
      clientDetails: {
        phone: "+966502345678",
        email: "sultan.otaibi@example.com",
        address: "Dammam, KSA",
      },
    },
    {
      id: "1234",
      name: "Reem Al-Dosari",
      location: {
        long: 41.6898,
        lat: 27.5219,
      },
      status: "In Warehouse",
      deliveryDate: null,
      expectedArrival: "2024-12-13",
      shipmentDetails: {
        weight: "7 kg",
        dimensions: "40x30x20 cm",
        description: "Television",
      },
      paymentStatus: "Paid",
      clientDetails: {
        phone: "+966504567890",
        email: "reem.dosari@example.com",
        address: "Hail, KSA",
      },
    },
    {
      id: "1235",
      name: "Saad Al-Mutairi",
      location: {
        long: 38.0556,
        lat: 24.4672,
      },
      status: "Returned",
      deliveryDate: "2024-12-05",
      expectedArrival: "2024-12-04",
      shipmentDetails: {
        weight: "2 kg",
        dimensions: "25x20x15 cm",
        description: "Tablet",
      },
      paymentStatus: "Refunded",
      clientDetails: {
        phone: "+966505678901",
        email: "saad.mutairi@example.com",
        address: "Medina, KSA",
      },
    },
    {
      id: "1236",
      name: "Noura Al-Shamrani",
      location: {
        long: 40.4153,
        lat: 19.9933,
      },
      status: "In Transit",
      deliveryDate: "2024-12-15",
      expectedArrival: "2024-12-14",
      shipmentDetails: {
        weight: "4 kg",
        dimensions: "35x25x20 cm",
        description: "Camera",
      },
      paymentStatus: "Pending",
      clientDetails: {
        phone: "+966506789012",
        email: "noura.shamrani@example.com",
        address: "Abha, KSA",
      },
    },
    {
      id: "1237",
      name: "Majed Al-Fahad",
      location: {
        long: 49.9728,
        lat: 26.2172,
      },
      status: "Delivered",
      deliveryDate: "2024-12-06",
      expectedArrival: "2024-12-05",
      shipmentDetails: {
        weight: "6 kg",
        dimensions: "50x40x30 cm",
        description: "Desktop Computer",
      },
      paymentStatus: "Paid",
      clientDetails: {
        phone: "+966507890123",
        email: "majed.fahad@example.com",
        address: "Al-Khobar, KSA",
      },
    },
  ];
  const shipment = shipments.find((s) => s.id === shipmentId);
  if (!shipment) {
    return reply.code(404).send({
      message: "Shipment not found",
    });
  }

  return reply.code(200).send(shipment);
});

const start = async () => {
  try {
    await fastify.listen({ port: 1234 });
    console.log("Server listening on port 1234");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
