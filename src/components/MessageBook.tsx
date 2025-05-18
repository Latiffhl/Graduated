import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Sparkles } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const MessageBook: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: 'L',
      message: 'Kamu adalah sempurna dari sekian banyaknya lirik sempurna, happy graduation Kaila!',
      timestamp: new Date(),
    },
  ]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || message.trim() === '') {
      toast({
        title: 'Mohon isi semua kolom!',
        description: 'Nama dan pesan harus diisi.',
        variant: 'destructive',
      });
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      name,
      message,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setName('');
    setMessage('');

    toast({
      title: 'Pesan Terkirim!',
      description: 'Terima kasih atas ucapannya untuk Kaila.',
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h2 className="text-3xl font-script text-center text-navy mb-6">Buku Ucapan</h2>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nama
          </label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan nama Anda" className="border-gold/30 focus:border-gold" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Pesan untuk Kaila
          </label>
          <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tulis ucapan selamat untuk Kaila..." className="min-h-[100px] border-gold/30 focus:border-gold" />
        </div>

        <Button type="submit" className="w-full bg-gold hover:bg-gold/80 text-white">
          <Sparkles className="mr-2 h-4 w-4" />
          Kirim Ucapan
        </Button>
      </form>

      <div className="space-y-4 max-h-[400px] overflow-y-auto p-2">
        {messages.map((msg) => (
          <Card key={msg.id} className="border border-gold/20 bg-cream/50">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-navy">{msg.name}</h4>
                <span className="text-xs text-gray-500">{msg.timestamp.toLocaleDateString('id-ID')}</span>
              </div>
              <p className="text-gray-700">{msg.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MessageBook;
