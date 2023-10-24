import { AuthApi } from '@/utils/fetch';
import { Button } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { title } from 'process';
import React, { FC, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import LoadingOverlay from './LoadingOverlay';

interface Props {
  isLive?: boolean;
  onClose: () => void;
}

const NewStreamForm: FC<Props> = ({ isLive, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    scheduledAt: '',
  });
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    scheduledAt: '',
  });
  const [loading, setLoading] = useState(false);
  const [entering, setEntering] = useState(false);

  const router = useRouter();
  console.log('isLive', isLive);

  const createStream = async (live?: boolean) => {
    setLoading(true);
    if (formData.title.trim() === '') return setErrors({ ...errors, title: 'Title is required' });
    if (formData.description.trim() === '')
      return setErrors({ ...errors, description: 'Description is required' });
    try {
      const { data } = await AuthApi.post('/stream/create', formData);
      console.log(data);
      console.log('live', live);
      if (!live) {
        onClose();
      } else {
        setEntering(true);
        router.push(`/portal/live/${data.data.stream?.roomId}`);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createStream(isLive);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, scheduledAt: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-y-4">
      {entering && <LoadingOverlay title="Entering Stream" />}
      <div className=" w-full flex-col flex gap-y-1">
        <p className="text-sm font-semibold">Title</p>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border-2 border-gray-400 focus:border-black duration-300 rounded-md p-2"
          required
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className=" w-full flex-col flex gap-y-1">
        <p className="text-sm font-semibold">Description</p>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border-2 border-gray-400 focus:border-black duration-300 rounded-md p-2"
          required
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>
      {!isLive && (
        <div className=" w-full flex-col flex gap-y-1">
          <p className="text-sm font-semibold">Scheduled At</p>
          <input
            type="datetime-local"
            name="scheduledAt"
            value={formData.scheduledAt}
            onChange={handleDateChange}
            placeholder="Scheduled At"
            className="border-2 border-gray-400 focus:border-black duration-300 rounded-md p-2"
            required
          />
          {errors.scheduledAt && <p className="text-red-500 text-sm">{errors.scheduledAt}</p>}
        </div>
      )}
      <Button className=" ml-auto" type="submit" disabled={loading}>
        {loading ? <FaSpinner className="animate-spin" /> : 'Create Stream'}
      </Button>
    </form>
  );
};

export default NewStreamForm;
