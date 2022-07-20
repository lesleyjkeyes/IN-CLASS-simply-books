import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import { getAuthorBooks } from '../../api/authorData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAuthorBooks(firebaseKey).then((setBooks));
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
        </h5>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
      </div>
      <div className="d-flex flex-wrap">
        {books.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} />
        ))}
      </div>
    </div>
  );
}
