import { useAppSelector } from "../store"

export function Header() {
  const { currentModule, currentLesson } = useAppSelector(state => {
    const { currentModuleIndex, currentLessonIndex} = state.player

    const currentModule = state.player.course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]

    return {
      currentModule,
      currentLesson
    }
  })

  if (!currentModule || !currentLesson) {
    return null
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentModule.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo "{currentLesson.title}"
      </span>
    </div>
  )
}