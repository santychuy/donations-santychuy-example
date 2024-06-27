import { MercadoPagoConfig } from 'mercadopago';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Home = () => {
  const donate = async (formData: FormData) => {
    'use server';

    console.log(formData);
  };

  return (
    <main className="min-h-screen py-5 px-8">
      <h1 className="text-2xl font-bold">Santychuy Donations</h1>

      <form
        action={donate}
        className="grid border p-6 mt-10 max-w-[540px] mx-auto gap-7"
      >
        <Label htmlFor="donation" className="space-y-2">
          <p>How much?</p>
          <Input type="number" id="donation" name="donation" />
        </Label>
        <Label htmlFor="message" className="space-y-2">
          <p>What&apos;s your message?</p>
          <Textarea id="message" name="message" />
        </Label>

        <Button type="submit">Send</Button>
      </form>
    </main>
  );
};

export default Home;
