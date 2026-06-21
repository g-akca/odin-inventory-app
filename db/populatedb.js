import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id),
  quantity INTEGER NOT NULL DEFAULT 0,
  unit VARCHAR(50) NOT NULL,
  price NUMERIC(8,2) NOT NULL
);

INSERT INTO categories (name)
VALUES
  ('Produce'),
  ('Dairy'),
  ('Pantry'),
  ('Bakery'),
  ('Beverages')
ON CONFLICT (name) DO NOTHING;

INSERT INTO items (name, category_id, quantity, unit, price)
VALUES
  ('Bananas', (SELECT id FROM categories WHERE name = 'Produce'), 18, 'bunches', 0.79),
  ('Apples', (SELECT id FROM categories WHERE name = 'Produce'), 30, 'pieces', 0.49),
  ('Milk', (SELECT id FROM categories WHERE name = 'Dairy'), 12, 'cartons', 2.99),
  ('Greek Yogurt', (SELECT id FROM categories WHERE name = 'Dairy'), 20, 'cups', 1.99),
  ('Pasta', (SELECT id FROM categories WHERE name = 'Pantry'), 40, 'boxes', 1.49),
  ('Rice', (SELECT id FROM categories WHERE name = 'Pantry'), 25, 'bags', 3.25),
  ('Sourdough Bread', (SELECT id FROM categories WHERE name = 'Bakery'), 14, 'loaves', 4.50),
  ('Croissants', (SELECT id FROM categories WHERE name = 'Bakery'), 10, 'pieces', 2.75),
  ('Orange Juice', (SELECT id FROM categories WHERE name = 'Beverages'), 18, 'bottles', 3.99),
  ('Coffee', (SELECT id FROM categories WHERE name = 'Beverages'), 22, 'bags', 8.49)
ON CONFLICT DO NOTHING;
`;

async function main() {
  console.log("Seeding inventory database...");

  const client = new Client({
    connectionString: process.env.DATABASE_URL
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Inventory seed completed.");
  } catch (error) {
    console.error("Failed to seed inventory database:", error);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}

main();
