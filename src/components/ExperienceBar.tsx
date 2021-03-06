import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar() {

    return (
        <header className={ styles.experienceBar }>
            <span>0 px</span>
            <div>
                <div style={{ width: '50%' }} />

                <span className={ styles.currentExperience } style={{ left: '50%' }}>
                    300 px
                </span>
            </div>

            <span>600 px</span>
        </header>
    )

}