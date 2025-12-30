
export default function SocialItem({socialLink,socialIcon}) {
  return (
    <>
        <div className="socialItem">
            <a href={socialLink}>
                <img src={socialIcon} className="max-w-[20px] max-sm:max-w-[18px]" alt="" />
            </a>
        </div>
    </>
  )
}
