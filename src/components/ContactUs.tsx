'use client';

import { useTranslation } from '@/app/i18n/client';
import { useAos } from '@/hooks/useAos';

import CustomSelect from './custom-select';

// Extracted interface for form field from data
interface FormField {
  handle: string;
  type: string;
  display: string;
  config?: {
    options?: Record<string, string>;
    input_type?: string;
  };
}

export type ContactUsType = {
  entry: {
    website_components: {
      type: string;
      contact_us?: {
        title: string;
        fields: FormField[];
      };
    }[];
  };
};

export default function ContactUs({
  data,
  lang,
}: {
  data: ContactUsType;
  lang: string;
}) {
  const { t } = useTranslation(lang);
  useAos({ duration: 700, once: true });

  // Extracting the contact_us data from the provided JSON
  const contactUsData = data.entry.website_components.find(
    (component) => component.type === 'contact_us_section',
  )?.contact_us;

  const selectOptions = contactUsData?.fields.find(
    (field) => field.handle === 'inquiry_type',
  )?.config?.options;

  const formattedOptions = selectOptions
    ? Object.keys(selectOptions).map((key) => ({
        value: key,
        label:
          lang === 'en'
            ? (selectOptions[key]?.split('/')[1] as string)
            : (selectOptions[key]?.split('/')[2] as string),
      }))
    : [];

  return (
    <section className="contact-banner">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-0 lg:gap-10">
          <div
            className="col-span-12 lg:col-span-6 _fadeInUp-scroll"
            data-position="right-to-left"
            data-aos="fade-right"
            data-delay="150"
          >
            <div className="contact-banner__head">
              <div className="contact-banner__head-title">
                <h3>GET IN TOUCH</h3>
              </div>

              <div className="contact-banner__head-text">
                <p>We are here to help.</p>
                <br />
                <p>
                  If you require any further information regarding our products,
                  wish to join Luberef or have a media inquiry, please get in
                  touch.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-6 _fadeInUp-scroll"
            data-position="left-to-right"
            data-aos="fade-left"
            data-delay="150"
          >
            <div className="contact-banner__form">
              <form
                className="wpcf7-form"
                method="POST"
                encType="multipart/form-data"
              >
                <CustomSelect
                  name="sources"
                  id="sources"
                  options={formattedOptions}
                  placeholder={t('inquiry_type')}
                />

                {contactUsData?.fields
                  .filter((field) => field.handle !== 'inquiry_type')
                  .map((field) => (
                    <div key={field.handle} className="contact-banner__input">
                      <input
                        type={field.config?.input_type || 'text'}
                        name={field.handle}
                        className="form-input"
                        id={field.handle}
                        placeholder={t(field.display)}
                      />
                      <div className="is-attachment" />
                    </div>
                  ))}

                <div className="contact-banner__button">
                  <button
                    className="button button__custom button__custom--yellow send btn g-recaptcha"
                    data-sitekey="6Leb5zUhAAAAAHq2CswcsJXkeXS5uqEt5NBEvIXp"
                    data-callback="submitings"
                    data-badge="inline"
                    type="submit"
                  >
                    <span className="button__custom-text button__custom-text--21">
                      {t('send')}
                    </span>

                    <span className="button__custom-icon button__custom-icon--56">
                      <img src="/img/readmore.svg" alt="read more" />
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="contact-banner__footer" />
          </div>
        </div>
      </div>
    </section>
  );
}
