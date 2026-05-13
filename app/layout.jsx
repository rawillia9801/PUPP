import './globals.css';

export const metadata = {
  title: 'Pup-Lift | Emergency Support for Tiny Hearts',
  description: 'Emergency hypoglycemia guidance for Chihuahua puppy families from Southwest Virginia Chihuahua.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
