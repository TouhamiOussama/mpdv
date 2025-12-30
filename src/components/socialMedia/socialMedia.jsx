import React from 'react'
import { socialMedia } from '../../websiteContent'

export default function SocialMedia() {
    return (
        <>
            <div className="social gap-3 flex justify-center items-center">
                {socialMedia.map((item, index) => {
                    return (
                        <SocialItem
                            key={index}
                            socialIcon={item.socialIcon}
                            socialLink={item.socialLink}
                        />
                    )
                })}
            </div>
        </>
    )
}
