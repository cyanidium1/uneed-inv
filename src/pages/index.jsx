// pages/index.jsx
'use client';
import { useEffect, useState } from 'react';
import Layout from '../layout';
import { performRequest } from '../lib/datocms';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Button, Input, Textarea } from '@nextui-org/react';
import { sendMessage } from '../utils/sendMessage';

export default function Home() {
  const [data, setData] = useState({ allObjects: [], allProjects: [] });
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [theme, setTheme] = useState('light');

  const DATOCMS_QUERY = `query {
    allObjects {
      id
      name
      _status
      sold
      mainphoto {
        url
      }
      description
      benefitstitle
      benefitsdesc
      otherphotos {
        url
      }
    }
    _allObjectsMeta {
      count
    }
    allProjects {
      description
      id
      advantages {
        description
        id
        title
      }
      mainphoto {
        url
      }
      name
      name2
      projectdetails {
        details
        id
        name
      }
      projectdetails2
      projectphotos {
        url
      }
      videolink
      videoplaceholder {
        url
      }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await performRequest({ query: DATOCMS_QUERY });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data from DatoCMS:', error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = form;
    sendMessage(`Заявка от ${name} с номером телефона ${phone} и сообщением ${message}`);
  };

  // const sendMessage = (message) => {
  //   console.log(message);
  // };

  return (
    <Layout>
      <main className={`${theme} flex min-h-screen flex-col items-center justify-between p-8 bg-white dark:bg-gray-900 text-black dark:text-white`}>
        
        {data.allObjects.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {data.allObjects.map((object) => (
                <div key={object.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold">{object.name}</h2>
                  <p>{object.description}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {object.otherphotos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo.url}
                        alt={object.name}
                        onClick={() => {
                          setLightboxOpen(true);
                          setLightboxIndex(index);
                        }}
                        className="cursor-pointer rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Lightbox
              open={isLightboxOpen}
              index={lightboxIndex}
              close={() => setLightboxOpen(false)}
              slides={data.allObjects.flatMap((object) => object.otherphotos.map((photo) => ({ src: photo.url })))}
            />
          </>
        )}
        <form onSubmit={handleFormSubmit} className="w-full max-w-lg p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <div className="mb-4 p-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Имя</label>
            <Input
              clearable
              underlined
              fullWidth
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">Телефон</label>
            <Input
              clearable
              underlined
              fullWidth
              id="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Сообщение</label>
            <Textarea
              clearable
              underlined
              fullWidth
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <Button type="submit" shadow color="primary" auto>
            Отправить
          </Button>
        </form>
      </main>
    </Layout>
  );
}
