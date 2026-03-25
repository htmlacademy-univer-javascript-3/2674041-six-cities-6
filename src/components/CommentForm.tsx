import { useId, useState } from 'react';

const CommentForm = () => {
  const formId = useId();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const isSubmitEnabled = rating > 0 && review.length >= 50;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor={`${formId}-review`}>
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id={`${formId}-5-stars`}
          type="radio"
          checked={rating === 5}
          onChange={() => setRating(5)}
        />
        <label htmlFor={`${formId}-5-stars`} className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id={`${formId}-4-stars`}
          type="radio"
          checked={rating === 4}
          onChange={() => setRating(4)}
        />
        <label htmlFor={`${formId}-4-stars`} className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id={`${formId}-3-stars`}
          type="radio"
          checked={rating === 3}
          onChange={() => setRating(3)}
        />
        <label htmlFor={`${formId}-3-stars`} className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id={`${formId}-2-stars`}
          type="radio"
          checked={rating === 2}
          onChange={() => setRating(2)}
        />
        <label htmlFor={`${formId}-2-stars`} className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id={`${formId}-1-star`}
          type="radio"
          checked={rating === 1}
          onChange={() => setRating(1)}
        />
        <label htmlFor={`${formId}-1-star`} className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id={`${formId}-review`}
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(evt) => setReview(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isSubmitEnabled}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
