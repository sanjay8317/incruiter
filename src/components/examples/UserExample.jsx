'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getUserList } from '@/lib/redux/slices/userListSlice/userSlice';

export default function UserExample() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user?.data);
  const total = useSelector((state) => state.user?.total);
  const loading = useSelector((state) => state.user?.loading);

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch your action
    dispatch(getUserList(formData));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">
        Redux User List Example
      </h2>

      <div className="mb-4">
        <p className="text-slate-700 dark:text-slate-300">Total Users: {total}</p>
        <p className="text-slate-700 dark:text-slate-300">Data: {userList?.length}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-700 dark:text-slate-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md dark:bg-slate-700 dark:text-slate-100"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Fetch Users'}
        </button>
      </form>
    </div>
  );
}