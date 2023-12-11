import Link from 'next/link';
import React, { useState } from 'react';

type IProps = {
  day: string;
  dayIndex: number; // Add dayIndex here
  userSubjects: {
    subjectTitle: string;
  }[];
  handleDelete: (dayIndex: number, subjectIndex: number) => void; // Update the type signature
  handleEdit: (
    dayIndex: number,
    subjectIndex: number,
    newTitle: string,
  ) => void;
};

export default function DashboardUserContent({
  day,
  dayIndex, // Accept dayIndex
  userSubjects,
  handleDelete,
  handleEdit,
}: IProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState<string>('');

  const startEditing = (index: number, currentTitle: string) => {
    setEditIndex(index);
    setNewTitle(currentTitle);
  };

  const saveEdit = (index: number) => {
    handleEdit(dayIndex, index, newTitle);
    setEditIndex(null);
  };
  return (
    <div>
      <h2 className="py-[12px] lg:py-[0.885vw] font-size-20  text-[#332F66] tajawal-bold">
        {day}
      </h2>
      <div className="flex flex-col gap-y-[15px] lg:gap-y-[1.042vw]">
        {userSubjects.map((subject, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="flex justify-between items-center group relative"
          >
            <Link
              href={`/dashboard/subject/${index}`}
              className="flex  items-center gap-x-[10px] lg:space-x-[13px]"
            >
              <img
                className="w-[18px] lg-w-[1.25vw] pt-1"
                src="/img/message-content-icon.svg"
                alt="messageContentIcon"
              />
              {editIndex === index ? (
                <input
                  className="tajawal-medium font-size-16 text-[#1E1B3F] truncate max-w-[150px] lg:max-w-[12vw]"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onBlur={() => saveEdit(index)}
                  //  eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                />
              ) : (
                <p className="tajawal-medium font-size-16 text-[#1E1B3F] truncate max-w-[150px] lg:max-w-[12vw]">
                  {subject.subjectTitle}
                </p>
              )}
            </Link>
            <div className="flex edit-remove items-center gap-x-[10px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 group-hover:transition-all group-hover:duration-300 ">
              <button
                type="button"
                onClick={() => startEditing(index, subject.subjectTitle)}
                className="bg-transparent border-none pt-[6px]"
              >
                <img
                  className="w-[18px] lg:w-[24px] cursor-pointer"
                  src="/img/editpen-icon.png"
                  alt="Edit"
                />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(dayIndex, index)}
                className="bg-transparent border-none pt-[6px]"
              >
                <img
                  className="w-[18px] lg:w-[24px] cursor-pointer"
                  src="/img/trash-icon.svg"
                  alt="Delete"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
