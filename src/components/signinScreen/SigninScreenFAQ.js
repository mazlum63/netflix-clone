import React, { useState, useEffect } from 'react'
import SigninScreenReadyToWatch from './SigninScreenReadyToWatch'
import '../../cssFiles/signinScreen/SigninScreenFAQ.css'
import { PlusLarge } from '../../assets/Icons'

const SigninScreenFAQ = () => {
    const [faqs, setFaqs] = useState([])
    useEffect(() => {
        setFaqs([
            {
                id: '1',
                question: 'What can I watch on Netflix?',
                answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
                open: false
            },
            {
                id: '2',
                question: 'What is Netflix?',
                answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
                answerSecond: "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
                open: false
            },
            {
                id: '3',
                question: 'How much does Netflix cost?',
                answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from €7,99 to €17,99 a month. No extra costs, no contracts.',
                open: false
            },
            {
                id: '4',
                question: 'Where can I watch?',
                answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
                answerSecond: "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
                open: false
            },
            {
                id: '5',
                question: 'How do I cancel?',
                answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
                open: false
            },
            {
                id: '6',
                question: "Is Netflix good for kids?",
                answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
                answerSecond: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
                open: false
            },
        ])
    }, [])
    const faqOpen = (e) => {
        setFaqs(faqs.map((item) => {
            item = { ...item, open: false }
            if (item.id === e.target.id) {
                return { ...item, open: !item.open }
            }
            return item
        }))
    }
    return (
        <div className='signin__screen__faq'>
            <h1 className='faq__header'>Frequently Asked Questions</h1>
            <div className="faq__container">
                {faqs.map(faq => (
                    <div key={faq.id} className={`faq ${faq.open && 'faq__open'}`}>
                        <button id={faq.id} onClick={faqOpen} className='faq__button'>{faq.question}
                            <PlusLarge />
                        </button>
                        <div className='faq__answer'>
                            <p>
                                {faq.answer}
                                {faq.answerSecond && (<><br /><br /><span>{faq.answerSecond}</span></>)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <SigninScreenReadyToWatch />
        </div>
    )
}

export default SigninScreenFAQ