"use client"
import Text from '@/components/text/Text'
import Title from '@/components/title/Title'
import { useAuth } from '@/context/useAuthContext'
import { useHasMounted } from '@/hooks/useHasMounted'
import React from 'react'

function PersonalSection() {
    const { userData } = useAuth();
    const mounted = useHasMounted();

  if (!mounted) {
    
    return <div>Загрузка...</div>;
  }
  return (
    <div>
        <Title as="h1" value="Личная информация" className='my-4' />
        {userData && (
        <div className="flex flex-col gap-3 ">
          <Text fontSize="base" value={userData.name} />
          <Text fontSize="base" value={userData.email} />
          <Text fontSize="base" value={userData.phone || ''} />
          <Text fontSize="base" value={userData.address || ''} />
          

        </div>
        )}
        
    </div>
    
  )
}

export default PersonalSection